import React from 'react';
import { Grid, Image, TextArea, List, Segment, Button, Form } from 'semantic-ui-react'
import styles from './Forms.module.scss'


const Forms = ({ submitFn, changeFn, clearTitle, clearDescription }) => (
    <Form onSubmit={submitFn}>
        <Form.Field>
            <input placeholder='Title' type="text"
                name="title" onChange={changeFn} required value={clearTitle} />
        </Form.Field>
        <Form.Field>
            <TextArea placeholder='Description' type="text"
                name="description" onChange={changeFn} value={clearDescription} />
        </Form.Field>
        <Button type='submit'>+ Add New Note</Button>
    </Form>
);

export default Forms;