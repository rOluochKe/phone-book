import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { postPhonebookAPI } from '../api/contacts';

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: ""
}

function AddContact() {
  const navigate = useNavigate();
  const [contact, setContact] = useState(initialState)

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }

  const saveContact = (e) => {
    e.preventDefault()
    postPhonebookAPI(contact)
    setContact(initialState)
    toast.success("Contact saved successfully!");
    navigate("/")
  }

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='col-8'>
        <Link className='m-3 btn btn-outline-info' to='/'>Go back</Link>
        </div>

        <div className='col-4'>
          <p className="mr-3 h5 fw-semibold text-center">Add Contact</p>
        </div>
      </div>

      <form className='m-3' onSubmit={saveContact}>
        <div className="">
          <div className='col-12'>
            <label>First Name</label>
            <input
              name = "firstName"
              type="text"
              className="form-control mt-1"
              placeholder="i.e John"
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className='col-12 mt-3'>
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              name = "lastName"
              placeholder="i.e Doe"
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className='col-12 mt-3'>
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control mt-1"
              name = "phoneNumber"
              placeholder="i.e Doe"
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className='col-12 mt-3'>
            <button
              className='btn btn-primary col-6 d-flex justify-content-center m-1 p-2'
              type='submit'
            >
              Add Contact
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddContact
