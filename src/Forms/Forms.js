import React from 'react';
import { Grid, Image, TextArea, List, Segment, Button, Form } from 'semantic-ui-react'
import { styles } from './Forms.module.scss'


const Forms = ({ submitFn, changeFn, title, description }) => (
    <Form onSubmit={submitFn}>
        <Form.Field>
            <input placeholder='Title' type="text"
                name="title"
                value={title}
                onChange={e => changeFn(e)} />
        </Form.Field>
        <Form.Field>
            <TextArea placeholder='Tell us more' type="text"
                name="description"
                value={description} onChange={e => changeFn(e)} />
        </Form.Field>
        <Button type='submit'>+ Add New Note</Button>
    </Form>
);

export default Forms;