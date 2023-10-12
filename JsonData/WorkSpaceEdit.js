import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const WorkSpaceEdit = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        leftText: '',
        rightText: '',

        workspaceTitle1: '',
        workspaceDescription1: '',
        workspaceTeamSize1: '',

        workspaceTitle2: '',
        workspaceDescription2: '',
        workspaceTeamSize2: '',

        workspaceTitle3: '',
        workspaceDescription3: '',
        workspaceTeamSize3: '',

        workspaceTitle4: '',
        workspaceDescription4: '',
        workspaceTeamSize4: '',
    });

    useEffect(() => {
        axios.get("http://localhost:5000/WorkSpace")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            setFormData(data[0]);
        }
    }, [data]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5000/WorkSpace/5', formData)
            .then(res => {
                alert('data updated successfully....')
                navigate('/admin')
            })
    };

    return (
        <div className='WorkSpaceEditContentContainer'>
            <form onSubmit={handleSubmit}>

                <h3 className='EditContentContainerHeading'>WorkSpace Details</h3>

                <div className='WorkSpaceEditContentContainer1'>
                    <div className='EditContentContainerText'>Left Text:
                        <input type="text" value={formData.leftText} onChange={handleChange} id="leftText" />
                    </div>
                    <div className='EditContentContainerText'>Right Text:
                        <input type="text" value={formData.rightText} onChange={handleChange} id="rightText" />
                    </div>
                </div>

                <div className='WorkSpaceEditContentContainer2'>
                    <div className='EditContentContainerText'>Workspce title 1:
                        <input type="text" value={formData.workspaceTitle1} onChange={handleChange} id="workspaceTitle1" />
                    </div>
                    <div className='EditContentContainerText'>Workspace Description 1:
                        <input type="text" value={formData.workspaceDescription1} onChange={handleChange} id="workspaceDescription1" />
                    </div>
                    <div className='EditContentContainerText'>Workspace TeamSize 1:
                        <input type="text" value={formData.workspaceTeamSize1} onChange={handleChange} id="workspaceTeamSize1" />
                    </div>
                </div>

                <div className='WorkSpaceEditContentContainer3'>
                <div className='EditContentContainerText'>Workspce title 2:
                    <input type="text" value={formData.workspaceTitle2} onChange={handleChange} id="workspaceTitle2" />
                </div>
                <div className='EditContentContainerText'>Workspace Description 2:
                    <input type="text" value={formData.workspaceDescription2} onChange={handleChange} id="workspaceDescription2" />
                </div>
                <div className='EditContentContainerText'>Workspace TeamSize 2:
                    <input type="text" value={formData.workspaceTeamSize2} onChange={handleChange} id="workspaceTeamSize2" />
                </div>
                </div>

                <div className='WorkSpaceEditContentContainer4'>
                <div className='EditContentContainerText'>Workspce title 3:
                    <input type="text" value={formData.workspaceTitle3} onChange={handleChange} id="workspaceTitle3" />
                </div>
                <div className='EditContentContainerText'>Workspace Description 3:
                    <input type="text" value={formData.workspaceDescription3} onChange={handleChange} id="workspaceDescription3" />
                </div>
                <div className='EditContentContainerText'>Workspace TeamSize 3:
                    <input type="text" value={formData.workspaceTeamSize3} onChange={handleChange} id="workspaceTeamSize3" />
                </div>
                </div>


                <div className='EditContentContainerButton'>
                    <Link to='/admin' className='TopAlertEditlink'>Back</Link>
                    <button type='submit' className='TopAlertEditlink'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default WorkSpaceEdit
