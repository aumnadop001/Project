import { Button, Container, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { callPost } from '../services/axios.service'

function AddProduct() {
  const navigate = useNavigate()
  const location = useLocation()
  const data = location.state?.data;
  const [initialValues, setInitialValues] = useState({})

  useEffect(() => {
    if (data) {
      setInitialValues(data)
    } else {
      setInitialValues({ name: '', image: '', description: '', price: 0 })
    }
  }, [data])

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <Container>
      <Typography variant='h5'>Add Product</Typography>
      <br />
      <Divider />
      <br />
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          const formData = { ...values };
          if (values.image) {
            formData.image = await convertToBase64(values.image);
          }
          
          callPost('products', formData).then((res) => {
            if (res) {
              navigate('/Product')
            }
          })
        }}
      >
        {({ values, setFieldValue, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id='name'
                  name='name'
                  label='Name'
                  value={values.name}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  id='image'
                  name='image'
                  type='file'
                  accept='image/*'
                  onChange={async (event) => {
                    const file = event.currentTarget.files[0];
                    if (file) {
                      setFieldValue('image', file);
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='description'
                  name='description'
                  label='Description'
                  value={values.description}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='price'
                  name='price'
                  label='Price'
                  type='number'
                  value={values.price}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Stack spacing={2} direction='row' justifyContent='flex-end'>
              <Button type='submit' variant='contained'>Submit</Button>
            </Stack>
          </form>
        )}
      </Formik>
    </Container>
  )
}

export default AddProduct;