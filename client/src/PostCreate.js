import axios from "axios";
import React, { useState } from "react";

const PostCreate =  () =>{
 
    const [title, setTitle] = useState('');
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        })
        setTitle('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title : </label>
                    <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <br/>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default PostCreate;