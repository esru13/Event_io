import React from 'react';
import { FaMusic, FaBriefcase, FaPaintBrush, FaGraduationCap, FaFilm, FaCamera, FaTheaterMasks } from 'react-icons/fa'; 

const brandListStyle = {
  display: 'flex',
  flexWrap: 'nowrap',
  animation: 'scroll-left 20s linear infinite', 
};

const brandContainerStyle = {
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '#5516DA', 
  padding: '10px 0',
  position: 'relative', 
};

const brandItemStyle = {
  flex: '0 0 auto',
  marginRight: '20px',
  padding: '10px',
  minWidth: '120px',
  textAlign: 'center',
  color: '#FFFFFF', 
  fontWeight: 'bold',
  fontFamily: 'Poppins, sans-serif', 
  fontSize: '30px', 
  cursor: 'pointer',
  position: 'relative',
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
};

const underlineStyle = {
  textDecoration: 'underline',
};

const iconStyle = {
  marginRight: '10px', 
  fontSize: '40px', 
};

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
  @keyframes scroll-left {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
document.head.appendChild(styleSheet);

const Brand = () => {
  return (
    <div style={brandContainerStyle}>
      <div style={brandListStyle}>
        <div style={brandItemStyle}>
          <FaMusic style={iconStyle} />
          Music
        </div>
        <div style={{ ...brandItemStyle, ...underlineStyle }}>
          <FaBriefcase style={iconStyle} />
          Business
        </div>
        <div style={brandItemStyle}>
          <FaPaintBrush style={iconStyle} />
          Art
        </div>
        <div style={brandItemStyle}>
          <FaGraduationCap style={iconStyle} />
          Education
        </div>
        <div style={brandItemStyle}>
          <FaFilm style={iconStyle} />
          Film
        </div>
        <div style={brandItemStyle}>
          <FaCamera style={iconStyle} />
          Photography
        </div>
        <div style={brandItemStyle}>
          <FaTheaterMasks style={iconStyle} />
          Theater
        </div>
      </div>
    </div>
  );
};

export default Brand;
