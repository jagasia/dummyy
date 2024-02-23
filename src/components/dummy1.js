import React from 'react'
import { Form, Field } from 'react-advanced-form'
import { Input } from 'react-advanced-form-addons'

export default class Dummy extends React.Component {
  render() {
    return (
      <Form>
        <Field.Group name="primaryInfo">
          <Input name="username" value="admin" />
          <Input name="firstName" value="John" />
        </Field.Group>

        <Input name="city" value="London" />
        <div>
            {this.primaryInfo}
        </div>
      </Form>
    );
  }
}