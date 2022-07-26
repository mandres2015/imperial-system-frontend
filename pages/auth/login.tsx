import { Form, Formik } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import ButtonRounded from '../../components/button-rounded'
import TextFieldRounded from '../../components/textfield_rounded'
import style from '../../styles/login.module.css'
import gogoleLogo from '../../public/images/google_logo.png'

const SignIn = () => {
  const { t } = useTranslation('common')
  return (
    <div className='flex justify-center min-h-screen md:bg-main items-center'>
      <div className={`${style.shape} md:hidden`}>
        <div className={style.box}></div>
        <div className={style.circle}></div>
      </div>
      <div className='md:flex md:flex-1 min-h-screen hidden justify-center'>
        <div className='block self-center text-white'>
          <p className='text-2xl self-center'>Bienvenido a</p>
          <h1 className='text-6xl self-center'>CYBER MARKET ALEXIS</h1>
          <p className='text-2xl self-center'>Inicia sesion para empezar</p>
          <div className='flex justify-center my-16'>
            <Image
              src={gogoleLogo}
              height={'200'}
              width={'200'}
              objectFit={'contain'}
              alt='logo'
            />
          </div>
        </div>
      </div>
      <div className='md:flex-1 w-full z-10 px-4 py-8 flex justify-center'>
        <div className='rounded-lg w-5/6 sm:w-4/6 md:w-5/6 xl:w-1/2'>
          <div className='bg-white shadow-md md:shadow rounded-lg shadow-gray-200 flex flex-col justify-center'>
            <h2 className='text-4xl font-bold my-8 self-center'>
              {t('signIn').toLocaleUpperCase()}
            </h2>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={({ email, password }) => {
                console.log(email + ' ' + password)
              }}
            >
              <Form className='flex flex-col px-4 pb-8' action=''>
                <p>{t('email')}</p>
                <TextFieldRounded
                  name='email'
                  id='email'
                  placeholder={t('email')}
                  type='email'
                ></TextFieldRounded>
                <p className='mt-2'>{t('password')}</p>
                <TextFieldRounded
                  name='password'
                  id='password'
                  placeholder={t('password')}
                  type='password'
                ></TextFieldRounded>
                <div className='block'>
                  <a
                    className='text-light-black underline float-right mt-2 text-xs'
                    href='#'
                  >
                    {t('forgotPassword')}
                  </a>
                </div>
                <div className='flex justify-center mt-8 mb-4'>
                  <ButtonRounded
                    width='w-full max-w-200'
                    text={t('login')}
                    color='bg-secondary'
                  ></ButtonRounded>
                </div>
                <p className='self-center text-gray-500'>{t('or')}</p>
                <div className='flex justify-center my-4'>
                  <a
                    className='flex w-full max-w-fit justify-center items-cente shadow rounded-3xl p-3 mt-1 placeholder:text-gray-300 placeholder:font-light cursor-pointer'
                    href='#'
                  >
                    <Image
                      src={gogoleLogo}
                      height={'24'}
                      width={'24'}
                      objectFit={'contain'}
                      alt='logo'
                    />
                    <p className='ml-4'>{t('continueWithGoogle')}</p>
                  </a>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
