import PropTypes from 'prop-types'
export const OneofSample = (props) => {
    const {color}=props
  return (
    <div style={{backgroundColor:color,padding:"20px",color:"White"}}>
        <p>Background Color {color}</p>
    </div>
  )
};

OneofSample.propTypes  = {
  color:PropTypes.oneOf(["green","red","Blue"]).isRequired,
}
