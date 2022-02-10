import styled from '@emotion/styled'

const Input = styled.input`
  padding: 0.5em 1em;
  border-radius: 5px;
  border-style: none;
  border: 1px solid #d1d1d1;
  outline: none;
  height: 35px;
  border-color: ${(props) => (!!props.error ? 'red' : '#d1d1d1')};
`

const Text = styled.p`
  margin: 0;
  color: red;
  font-size: 0.875rem;
`

const ExportedInput = ({ error, ...restProps }) => {
  return (
    <div>
      <Input error={error} {...restProps} />
      {error && <Text>{error}</Text>}
    </div>
  )
}

export default ExportedInput
