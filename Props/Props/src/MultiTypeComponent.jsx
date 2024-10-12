import PropTypes from 'prop-types'
export const MultiTypeComponent = (props) => {
  return (
    <div>The value is {props.value}</div>
  )
};

MultiTypeComponent.propTypes={
    value:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]).isRequired
}
