import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import { Tabs } from 'antd';

const Poppup = (props) => {

  const {openpopup,setopenpopup,formvalue,setformvalue} = props;

  const handleChange = (e)=>{
    setformvalue({
      ...formvalue,[e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formvalue)
  }

  return (
      <Dialog open = {openpopup}>
        <DialogTitle style={{width: 600}}>
            <div>Add New Profile</div>
        </DialogTitle>
        <DialogContent>
                <Tabs>
                    <Tabs.TabPane tab="Basic" key={0}>
                      {
                        <form>
                            <div class="mb-3">
                              <label for="name" class="form-label">Enter Name*</label>
                              <input type='text' class="form-control" name='name' value={formvalue.name} onChange={handleChange} placeholder='Eg. John Doe'></input>
                            </div>
                            <div class="mb-3">
                              <label for="email" class="form-label">Enter Email*</label>
                              <input type='email' class="form-control" name='email' value={formvalue.email} onChange={handleChange} placeholder='Eg. John@xyz.com'></input>
                            </div>
                            <div class="mb-3">
                              <label for="phone" class="form-label">Enter Phone*</label>
                              <input type='text' class="form-control" name='phone' value={formvalue.phone} onChange={handleChange} placeholder='Eg. 9999999999'></input>
                            </div>
                        </form>
}                     
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Social" key={1}>
                      {
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                              <label for="iid" class="form-label">Instagram Link<span style={{fontWeight: 'lighter'}}>(Optional)</span></label>
                              <input type='text' class="form-control" name='iid' value={formvalue.iid} onChange={handleChange} placeholder='Eg. .instagram.com/username'></input>
                            </div>
                            <div class="mb-3">
                              <label for="yt" class="form-label">Youtube Link<span style={{fontWeight: 'lighter'}}>(Optional)</span></label>
                              <input type='text' class="form-control" name='yt' value={formvalue.yt} onChange={handleChange} placeholder='Eg. .youtube/username'></input>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={()=>setopenpopup(false)}>Done</button>
                      </form>
                      }
                    </Tabs.TabPane>
                </Tabs>
        </DialogContent>
      </Dialog>
  )
}

export default Poppup
