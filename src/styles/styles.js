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
	    flexDirection: 'column'
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
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '0 4px 4px -2px rgba(0, 0, 0, 0.5)',
		display: 'table'
  }
  
}

export default styles;