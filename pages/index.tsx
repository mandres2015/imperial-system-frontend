import { useState } from 'react'
import { connect } from 'react-redux'
import { setInfo } from '../redux/actions/main'

function Home(props: { name: any; setInfo: any }) {
  const { name, setInfo } = props
  const [newName, setName] = useState('')

  return (
    <div className='w-full container'>
      <p className=''>Enter a Name {name}:</p>
      <form
        typeof='submit'
        className='inline-block mr-2'
        onSubmit={e => {
          e.preventDefault()
          setInfo(newName)
        }}
      >
        <input
          type='text'
          value={newName}
          onChange={e => setName(e.target.value)}
          className='border rounded p-2'
        ></input>
      </form>
      <button
        className='rounded-md px-4 py-2 bg-blue-600 text-white active:bg-yellow-300 focus:bg-yellow-300 focus:outline-none'
        onClick={() => setInfo(newName)}
      >
        Submit
      </button>
    </div>
  )
}

const mapStateToProps = (state: { main: { name: any } }) => {
  return { name: state.main.name }
}

const mapDispatchToProps = {
  setInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
