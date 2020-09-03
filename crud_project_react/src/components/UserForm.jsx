import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as firebase from "firebase";

class Userform extends Component {

    constructor(props) {
        super(props);
        this.key = this.props.match.params.key;
        this.title = "New User";
        this.state = {
            username : "",
            email : ""
        };

        if (this.key) {
            this.title = "Edit User";
        }
    }

    componentDidMount() {
        if (this.key) {
            firebase.database().ref("/" + this.key)
            .on("value", snapshot => {
                this.setState({
                    username : snapshot.val().username,
                    email : snapshot.val().email
                });
            });
        }
    }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <Formik
          enableReinitialize={true}
          initialValues={{
            username: this.state.username,
            email: this.state.email,
          }}
          validate={(values) => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (values.email.length < 10) {
              errors.email = "Email address too short";
            }

            if (!values.username) {
              errors.username = "Required";
            } else if (values.username.length < 3) {
              errors.username = "username too short";
            }

            return errors;
          }}
          // onSubmit={(values, { setSubmitting }) => {
          //   setTimeout(() => {
          //     firebase.database().ref("/")
          //       .push({
          //         username: values.username,
          //         email: values.email,
          //       })
          //       .then(() => this.props.history.push("/"));

          //     setSubmitting(false);
          //   }, 400);
          // }}

          onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                if (this.key) {
                  firebase.database().ref("/" + this.id).update({
                    username : values.username,
                    email : values.email
                  }).then(() => this.props.history.push("/"));
                } else {
                  firebase.database().ref("/").push({
                    username : values.username,
                    email : values.email
                  }).then(() => this.props.history.push("/"));
                }
                setSubmitting(false);
              }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" placeholder="email" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="email" component="div" />
              </span>
              <Field type="username" name="username" placeholder="username" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="username" component="div" />
              </span>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Userform;
