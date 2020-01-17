import React from 'react';
import styled from "styled-components";
import { Button, Checkbox, Form, Icon, Input, notification } from "antd";

class ContactComponent extends React.PureComponent {

    _handleClickSubmit = e => {
        const { resetFields } = this.props.form;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                resetFields();
                notification.success({
                    message: 'Success',
                    description: `Your message has successfully been sent to ${values.email}!`
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Container>
                <h1>Contact</h1>
                <ContactForm onSubmit={this._handleClickSubmit}>
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Name"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your email!'
                                },
                                {
                                    type: 'email',
                                    message: 'The input is not a valid email!',
                                }
                            ],
                        },)(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="email"
                                placeholder="Email"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('message', {
                            rules: [{ required: true, message: 'Please input your message!' }],
                        })(
                            <Input.TextArea placeholder="Message" />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <ContactFormButton type="primary" htmlType="submit">
                            Send
                        </ContactFormButton>
                    </Form.Item>
                </ContactForm>
            </Container>
        );
    }
}

const Container = styled.div`
    padding: 5%;
`;

const ContactForm = styled(Form)`
    max-width: 300px;
`;

const ContactFormButton = styled(Button)`
    width: 100%;
`;

export default Form.create({ name: 'contact' })(ContactComponent);
