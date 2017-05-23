const styles = {

	// COLORS 
	mainColor: '#7ED321',
	buttonColor: '#36BAFF',
	mainFont: '"Open Sans", sans-serif',
	lightMainColor: '#b9e78b',

	// GENERAL STYLES
	container: {
	    display: 'flex',
	    flexDirection: 'column'
	},

	subContainer: {
	    display: 'flex',
	    flexDirection: 'row',
	    padding: '15px 20px 15px 20px'
	},

	column: {
	    display: 'flex',
	    flexDirection: 'column',
	    width: '100%'
	},

	shadow: {
		boxShadow: '0 4px 4px -2px rgba(0, 0, 0, 0.5)'
	},

	input: {
		borderRadius: '4px',
		height: 30,
		fontSize: 26,
		fontFamily: '"Open Sans", sans-serif',
		padding: 5
	},

	button: {
		background: '#36BAFF', 
	    color: 'white', 
	    fontSize: 30, 
	    fontFamily: '"Open Sans", sans-serif',
	    fontWeight: 700,
	    margin: 10, 
	    padding: '10px 20px', 
	    border: 0,
	    borderRadius: 5
	}, 

	buttonContainer: {
	    display: 'flex',
	    flexDirection: 'row',
	    justifyContent: 'center'
	},

	nextButton: {
		marginTop: 30,
    	background: '#36BAFF', 
		color: 'white', 
		fontSize: 30, 
		maxWidth: 300,
		fontFamily: '"Open Sans", sans-serif',
		fontWeight: 700,
		padding: '10px 30px', 
		border: 0,
		borderRadius: 5, 
		textDecoration: 'none',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'table',
		cursor: 'pointer',
		outline: 'none'
  },

  modal: {
    overlay : {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor   : 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      border: 'none',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '0',
      display: 'table',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      boxShadow: '0 4px 4px -2px rgba(0, 0, 0, 0.5)'
    }
  }
  
}

export default styles;