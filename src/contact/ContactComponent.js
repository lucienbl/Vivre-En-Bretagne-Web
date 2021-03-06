import React from 'react';
import styled from "styled-components";
import {Button, Checkbox, Form, Icon, Input, notification, Table, Tag} from "antd";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <span>{text}</span>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Roles',
        key: 'roles',
        dataIndex: 'roles',
        render: tags => (
          <span>
        {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'developer') {
                color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
              </Tag>
            );
        })}
      </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'Victor Follorou',
        email: 'victor.folloroulannion@gmail.com',
        roles: ['developer', 'designer'],
    },
    {
        key: '2',
        name: 'Ewen Bozec',
        email: 'ewen.bozec@gmail.com',
        roles: ['developer', 'designer'],
    },
    {
        key: '3',
        name: 'Lucas Neger',
        email: 'lucas.neger22@gmail.com',
        roles: ['developer'],
    },
    {
        key: '4',
        name: 'Lucien Blunk-Lallet',
        email: 'lucien.blunk.lallet@gmail.com',
        roles: ['developer'],
    },
];

class ContactComponent extends React.PureComponent {

    _handleClickSubmit = e => {
        const { resetFields } = this.props.form;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                resetFields();
                notification.success({
                    message: 'Succès',
                    description: `Votre message a bien été envoyé!`
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Container>
                <h1>Nous contacter</h1>
                <ContactForm onSubmit={this._handleClickSubmit}>
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Veuillez entrer votre nom!' }],
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
                                    message: 'Veuillez entrer votre adresse email!'
                                },
                                {
                                    type: 'email',
                                    message: 'L\'adresse email n\'est pas valide!',
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
                            rules: [{ required: true, message: 'Merci d\'entrer un message!' }],
                        })(
                            <Input.TextArea placeholder="Message" />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <ContactFormButton type="primary" htmlType="submit">
                            Envoyer
                        </ContactFormButton>
                    </Form.Item>
                </ContactForm>
                <br />
                <h1>Credits</h1>
                <Table columns={columns} dataSource={data} />
            </Container>
        );
    }
}

const Container = styled.div`
    padding: 5%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ContactForm = styled(Form)`
    max-width: 300px;
`;

const ContactFormButton = styled(Button)`
    width: 100%;
`;

export default Form.create({ name: 'contact' })(ContactComponent);
