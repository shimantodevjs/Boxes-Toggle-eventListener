function Box(props){
   

    const styles={
        backgroundColor: props.on? "green" : "blue"
    }

    
    return(
          <div 
          className="box" 
          style={styles}
          onClick={()=>props.handleClick(props.id)} >
          </div>
        )
       
}

export default Box