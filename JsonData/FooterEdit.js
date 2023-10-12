import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './EditContent.css';

const FooterEdit = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FooterMenuHeading1: '',
    FooterMenuList1Option1: '',
    FooterMenuList1Option2: '',
    FooterMenuList1Option3: '',
    FooterMenuList1Option4: '',
    FooterMenuList1Option5: '',
    FooterMenuList1Option6: '',
    FooterMenuList1Option7: '',
    FooterMenuHeading2: '',
    FooterMenuList2Option1: '',
    FooterMenuList2Option2: '',
    FooterMenuList2Option3: '',
    FooterMenuList2Option4: '',
    FooterMenuHeading3: '',
    FooterMenuList3Option1: '',
    FooterMenuList3Option2: '',
    FooterMenuList3Option3: '',
    FooterMenuList3Option4: '',
    FooterLanguageLabel: '',
    FooterLanguageListOption1: '',
    FooterLanguageListOption2: '',
    FooterLanguageListOption3: '',
    FooterLanguageListOption4: '',
    FooterMenusAllLocation: '',
    FooterContact: '',
    FooterAddressP1: '',
    FooterAddressP2: '',
    FooterAddressP3: '',
    FooterAddressP4: '',
    FooterLegalMenuOption1: '',
    FooterLegalMenuOption2: '',
    FooterLegalMenuOption3: '',
    FooterLegalMenuOption4: '',
    FooterLegalMenuOption5: '',
    FooterLegalMenuOption6: '',
    FooterCopyright: '',
    FooterLogo: '',
  });

  useEffect(() => {
    axios.get("http://localhost:5000/Footer")
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
    axios.put('http://localhost:5000/Footer/13', formData)
      .then(res => {
        alert('data updated successfully....')
        navigate('/admin')
      })
  };


  return (
    <div className='FooterEditContentContainer'>
      <form onSubmit={handleSubmit}>

        <h3 className='EditContentContainerHeading'>Footer Details #component8 </h3>

        <div className='EditContentContainerText'>FooterMenu Heading1:
          <input type="text" value={formData.FooterMenuHeading1} onChange={handleChange} id="FooterMenuHeading1" />
        </div>

        <div className='FooterEditContentContainer1'>
        <div className='EditContentContainerText'>FooterMenuList1 Option1:
          <input type="text" value={formData.FooterMenuList1Option1} onChange={handleChange} id="FooterMenuList1Option1" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList1 Option2:
          <input type="text" value={formData.FooterMenuList1Option2} onChange={handleChange} id="FooterMenuList1Option2" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList1 Option3:
          <input type="text" value={formData.FooterMenuList1Option3} onChange={handleChange} id="FooterMenuList1Option3" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList1 Option4:
          <input type="text" value={formData.FooterMenuList1Option4} onChange={handleChange} id="FooterMenuList1Option4" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList1 Option5:
          <input type="text" value={formData.FooterMenuList1Option5} onChange={handleChange} id="FooterMenuList1Option5" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList1 Option6:
          <input type="text" value={formData.FooterMenuList1Option6} onChange={handleChange} id="FooterMenuList1Option6" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList1 Option7:
          <input type="text" value={formData.FooterMenuList1Option7} onChange={handleChange} id="FooterMenuList1Option7" />
        </div>
        </div>


        <div className='EditContentContainerText'>FooterMenu Heading2:
          <input type="text" value={formData.FooterMenuHeading2} onChange={handleChange} id="FooterMenuHeading2" />
        </div>
        <div className='FooterEditContentContainer1'>
        <div className='EditContentContainerText'>FooterMenuList2 Option1:
          <input type="text" value={formData.FooterMenuList2Option1} onChange={handleChange} id="FooterMenuList2Option1" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList2 Option2:
          <input type="text" value={formData.FooterMenuList2Option2} onChange={handleChange} id="FooterMenuList2Option2" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList2 Option3:
          <input type="text" value={formData.FooterMenuList2Option3} onChange={handleChange} id="FooterMenuList2Option3" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList2 Option4:
          <input type="text" value={formData.FooterMenuList2Option4} onChange={handleChange} id="FooterMenuList2Option4" />
        </div>
        </div>



        <div className='EditContentContainerText'>FooterMenu Heading3:
          <input type="text" value={formData.FooterMenuHeading3} onChange={handleChange} id="FooterMenuHeading3" />
        </div>
        <div className='FooterEditContentContainer1'>
        <div className='EditContentContainerText'>FooterMenuList3 Option1:
          <input type="text" value={formData.FooterMenuList3Option1} onChange={handleChange} id="FooterMenuList3Option1" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList3 Option2:
          <input type="text" value={formData.FooterMenuList3Option2} onChange={handleChange} id="FooterMenuList3Option2" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList3 Option3:
          <input type="text" value={formData.FooterMenuList3Option3} onChange={handleChange} id="FooterMenuList3Option3" />
        </div>
        <div className='EditContentContainerText'>FooterMenuList3 Option4:
          <input type="text" value={formData.FooterMenuList3Option4} onChange={handleChange} id="FooterMenuList3Option4" />
        </div>
        </div>


        <div className='EditContentContainerText'>FooterLanguage Label:
          <input type="text" value={formData.FooterLanguageLabel} onChange={handleChange} id="FooterLanguageLabel" />
        </div>
        <div className='FooterEditContentContainer1'>
        <div className='EditContentContainerText'>FooterLanguage List Option1:
          <input type="text" value={formData.FooterLanguageListOption1} onChange={handleChange} id="FooterLanguageListOption1" />
        </div>
        <div className='EditContentContainerText'>FooterLanguage List Option2:
          <input type="text" value={formData.FooterLanguageListOption2} onChange={handleChange} id="FooterLanguageListOption2" />
        </div>
        <div className='EditContentContainerText'>FooterLanguage List Option3:
          <input type="text" value={formData.FooterLanguageListOption3} onChange={handleChange} id="FooterLanguageListOption3" />
        </div>
        <div className='EditContentContainerText'>FooterLanguage List Option4:
          <input type="text" value={formData.FooterLanguageListOption4} onChange={handleChange} id="FooterLanguageListOption4" />
        </div>
        </div>

        <div className='EditContentContainerText'>FooterMenus AllLocation:
          <input type="text" value={formData.FooterMenusAllLocation} onChange={handleChange} id="FooterMenusAllLocation" />
        </div>

        <div className='EditContentContainerText'>Footer Contact:
          <input type="text" value={formData.FooterContact} onChange={handleChange} id="FooterContact" />
        </div>
        <div className='FooterEditContentContainer1'>
        <div className='EditContentContainerText'>FooterAddress P1:
          <input type="text" value={formData.FooterAddressP1} onChange={handleChange} id="FooterAddressP1" />
        </div>
        <div className='EditContentContainerText'>FooterAddress P2:
          <input type="text" value={formData.FooterAddressP2} onChange={handleChange} id="FooterAddressP2" />
        </div>
        <div className='EditContentContainerText'>FooterAddress P3:
          <input type="text" value={formData.FooterAddressP4} onChange={handleChange} id="FooterAddressP3" />
        </div>
        <div className='EditContentContainerText'>FooterAddress P4:
          <input type="text" value={formData.FooterAddressP4} onChange={handleChange} id="FooterAddressP4" />
        </div>
        </div>


        <div className='FooterEditContentContainer1'>
        <div className='EditContentContainerText'>Footer LegalMenu Option1:
          <input type="text" value={formData.FooterLegalMenuOption1} onChange={handleChange} id="FooterLegalMenuOption1" />
        </div>
        <div className='EditContentContainerText'>Footer LegalMenu Option2:
          <input type="text" value={formData.FooterLegalMenuOption2} onChange={handleChange} id="FooterLegalMenuOption2" />
        </div>
        <div className='EditContentContainerText'>Footer LegalMenu Option3:
          <input type="text" value={formData.FooterLegalMenuOption3} onChange={handleChange} id="FooterLegalMenuOption3" />
        </div>
        <div className='EditContentContainerText'>Footer LegalMenu Option4:
          <input type="text" value={formData.FooterLegalMenuOption4} onChange={handleChange} id="FooterLegalMenuOption4" />
        </div>
        <div className='EditContentContainerText'>Footer LegalMenu Option5:
          <input type="text" value={formData.FooterLegalMenuOption5} onChange={handleChange} id="FooterLegalMenuOption5" />
        </div>
        <div className='EditContentContainerText'>Footer LegalMenu Option6:
          <input type="text" value={formData.FooterLegalMenuOption6} onChange={handleChange} id="FooterLegalMenuOption6" />
        </div>
        </div>

        <div className='FooterEditContentContainer1'>
        <div className='EditContentContainerText'>Footer Copyright:
          <input type="text" value={formData.FooterCopyright} onChange={handleChange} id="FooterCopyright" />
        </div>
        <div className='EditContentContainerText'>Footer Logo:
          <input type="text" value={formData.FooterLogo} onChange={handleChange} id="FooterLogo" />
        </div>
        </div>


        <div className='EditContentContainerButton'>
          <Link to='/admin' className='TopAlertEditlink'>Back</Link>
          <button type='submit' className='TopAlertEditlink'>Submit</button>
        </div>
      </form>
    </div>

  )
}

export default FooterEdit
