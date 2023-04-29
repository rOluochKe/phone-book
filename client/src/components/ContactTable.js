import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsTrash, BsPencil } from 'react-icons/bs'
import { toast } from 'react-toastify';

import { getPhonebooksAPI, deletePhonebookAPI } from '../api/contacts'

function ContactTable() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    getPhonebooksAPI().then(contacts => setContacts(contacts))
  }, []);

  const deleteContact = (id) => {
    deletePhonebookAPI(id).then(data => {
      if (data.deletedCount === 1) {
        setContacts(contacts.filter(contact => contact._id !== id))
      }
    })
    toast.success("Contact deleted successfully!");
  }

  return (
    <div className="m-3">
      <Link to='/contacts/add' className='btn btn-primary mb-3'>Add New Contact</Link>

      <div className="table">
        <div>
          {
            contacts.length > 0 ?
            contacts.map(contact => {
              const { _id, firstName, lastName, phoneNumber } = contact
              return (
                <div key={_id} className='tabe-row d-flex justify-content-between align-items-center'>
                  <div className='col-9'>
                    <div className='col-12 bold'>
                      {firstName} {lastName}
                    </div>

                    <div className='col-12'>
                      {phoneNumber}
                    </div>
                  </div>
                  <div className='col-1'>
                    <Link
                      className='btn btn-outline-secondary'
                      to={`/contacts/${_id}`}
                    >
                      <BsPencil />
                    </Link>
                  </div>
                  <div>
                    <button
                      className='btn btn-outline-danger'
                      onClick={() => { window.confirm( 'Are you sure you want to delete this Contact?', ) && deleteContact(_id) }}
                    >
                      <BsTrash />
                    </button>
                  </div>
                </div>
              )
            })
            : (
              <div>
                 <div>
                    No data found! Add some contacts.
                  </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ContactTable
