import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { patchPhonebookAPI, getSinglePhonebookAPI } from '../api/contacts';

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: ""
}

function EditContact () {
  const params = useParams();
  const { id } = params

  const navigate = useNavigate();
  const [contact, setContact] = useState(initialState)

  useEffect(() => {
    getSinglePhonebookAPI(id).then(contact => setContact(contact))
  }, [id]);

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }

  const saveContact = (e) => {
    e.preventDefault()
    patchPhonebookAPI(contact)
    setContact(initialState)
    toast.success("Contact updated successfully!");
    navigate("/")
  }

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='col-8'>
        <Link className='m-3 btn btn-outline-info' to='/'>Go back</Link>
        </div>

        <div className='col-4'>
          <p className="mr-3 h5 fw-semibold text-center">Update Contact</p>
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
              value={contact.firstName}
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
              value={contact.lastName}
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
              value={contact.phoneNumber}
              required
            />
          </div>

          <div className='col-12 mt-3'>
            <button
              className='btn btn-primary col-6 d-flex justify-content-center m-1 p-2'
              type='submit'
            >
              Update Contact
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditContact
