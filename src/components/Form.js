import React from 'react';
import {
    Formik,
    Form,
} from 'formik';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Box,
    Textarea
} from "@chakra-ui/react";
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required().email(),
    message: Yup.string().required()
});



export const ContactForm = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    };
    return (
        <Box
            maxWidth='400px'
        >
            <Formik
                initialValues={initialValues}
                validationSchema={FormSchema}

                onSubmit={(values, actions) => {
                    actions.setSubmitting(true);
                    setTimeout(() => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                        actions.resetForm();
                    }, 1000)
                }}
            >
                {({ errors, touched, handleChange, isSubmitting }) => (
                    <Form
                    >
                        <FormControl id="name">
                            <FormLabel>name</FormLabel>
                            <Input
                                type="name"
                                size='lg'
                                variant="filled"
                                placeholder="name"
                                onChange={handleChange}
                            />
                            {/* send error */}
                            {errors.name && touched.name ? (
                                <FormHelperText>{errors.name}</FormHelperText>
                            ) : null}
                        </FormControl>
                        <FormControl id="email" mt={4}>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                size='lg'
                                variant="filled"
                                placeholder="email"
                                onChange={handleChange}
                            />
                            {/* send error */}
                            {errors.email && touched.email ? (
                                <FormHelperText>{errors.email}</FormHelperText>
                            ) : null}
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Let's talk</FormLabel>
                            <Textarea
                                // value={value}
                                // onChange={handleInputChange}
                                borderRadius={8}
                                variant='filled'
                                Height='200px'
                                placeholder="How can we help? "
                                size="sm"
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            size="md"
                            height="48px"
                            width="100%"
                            maxWidth='400px'
                            color='#fff'
                            bg='#9A3B3D'
                            borderColor="none"
                            isLoading={isSubmitting}
                            mt={6}
                            _hover={{
                                backgroundColor: '#fff',
                                border: '3px solid #9A3B3D'
                                , color: "#000",
                            }}
                        >Submit</Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}