"use client"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { careerFormValidation, careerFormInputs } from '@/constants/index';
import { CareerFormValues } from '@/types/index';
import emailjs from "@emailjs/browser"
import { Button } from './ui/button';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const JobForm = () => {


    const [isLoading, setIsLoading] = useState(false);
    const { handleChange, handleSubmit, handleBlur, touched, errors, values, setFieldValue } = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            cv: ""
        },
        validationSchema: Yup.object(careerFormValidation),
        onSubmit: async (formValues: any, { resetForm }) => {
            setIsLoading(true);

            const templateParams = {
                to_name: "tech flow team",
                from_name: `name: ${formValues.fullName}, email: ${formValues.email} and organization: ${formValues.organization}`,
                message: formValues?.message
            };

            try {
                const res = await emailjs.send(
                    "service_l4tn9vr",
                    "template_sbrpmb8",
                    templateParams,
                    "nHvx1qQWN8Rleb-Jm"
                );
                console.log(res);

                const { status } = res;

                if (status === 200) {
                    resetForm()
                    toast.success("Your message successfully submitted");
                } else {
                    toast.error("Failed to submit message");
                }
                setIsLoading(false);
            } catch (error: any) {
                toast.error(error.message);
                setIsLoading(false);
            }
        },

    });

    const handleFileChange = async (event: any) => {
        const file = event.currentTarget.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onloadend = () => {
                if (reader.readyState === 2) {
                    setFieldValue('cv', reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section>
            <div className="container mx-auto px-4">
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    {careerFormInputs.map((v, i) => (
                        <div key={i} className="relative z-0 w-full mb-5 group">
                            <v.field
                                placeholder={v.label}
                                type={v.type}
                                name={v.name}
                                id={v.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values[v.name as keyof CareerFormValues]}
                                className={`bg-white w-full`}
                            />
                            {touched[v.name as keyof CareerFormValues] && errors[v.name as keyof CareerFormValues] && (
                                <div className="text-red-500 text-xs">{errors[v.name as keyof CareerFormValues] as any}</div>
                            )}


                        </div>
                    ))}

                    <Button type="submit" className="bg-Tblue hover:bg-TDarkBlue capitalize w-full" disabled={isLoading}>
                        {isLoading ? 'Submitting' : 'Submit'}
                    </Button>
                </form>
            </div>
            <Toaster />
        </section>
    );
};

export default JobForm;
