import React from 'react';

const buttonStyle = {
  backgroundColor: '#4F4FFF', // Couleur de fond bleue
  color: 'white',          // Texte en blanc
  padding: '10px 20px',    // Padding pour la taille du bouton
  border: 'none',          // Pas de bordure
  cursor: 'pointer',       // Curseur en forme de pointeur
};

class CustomButton extends React.Component<{ text: any, url: any }> {
  render() {
    let {text, url} = this.props;
    const handleClick = () => {
      window.location.href = url;
    };

    return (
      <button style={buttonStyle} onClick={handleClick}>
        {text}
      </button>
    );
  }
}


export default CustomButton;
