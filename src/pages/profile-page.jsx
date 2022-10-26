import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Header } from '../cmps/Header'

const initialValues = {
  fullName: '',
  email: '',
  age: '',
  phone: '',
  address: '',
  city: '',
  zipCode: '',
}

const userSchema = yup.object().shape({
  fullName: yup.string().required('required'),
  email: yup.string().email('Invalid Email').required('required'),
  age: yup
    .number()
    .required('required')
    .positive('Invalid Number')
    .integer('Invalid Number'),
  phone: yup.string(),
  address: yup.string(),
  city: yup.string(),
  zipCode: yup.number().positive('Invalid Number').integer('Invalid Number'),
})

export const ProfilePage = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)')

  const submitForm = (values) => {
    console.log(values)
  }

  return (
    <Box m="20px">
      <Header title="PROFILE FORM" subtitle="Create a new user profile" />

      <Formik
        onSubmit={submitForm}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                name="fullName"
                error={!!touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 3' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                name="age"
                error={!!touched.age && !!errors.age}
                helperText={touched.age && errors.age}
                sx={{ gridColumn: 'span 1' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name="city"
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: 'span 1' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Zip Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.zipCode}
                name="zipCode"
                error={!!touched.zipCode && !!errors.zipCode}
                helperText={touched.zipCode && errors.zipCode}
                sx={{ gridColumn: 'span 1' }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" varient="contained">
                Create new user
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}
