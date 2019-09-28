import React from 'react'
import styled from 'styled-components'

const NotFound: React.FC = () => {
  return(
    <Box>
      <Wave />
      <ErrorCode>
        404
      </ErrorCode>
      <Message>
        Not Found
      </Message>
    </Box>
  )
}

/* Styles */
const Box = styled.div`
  height: calc(100vh - 100px);
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Wave = styled.div`
  opacity: .8;
  position: absolute;
  bottom: 30%;
  right: -50%;
  background: #ECEFF1;
  width: 200vw;
  height: 200vw;
  border-radius: 43%;
  animation: drift 35s infinite linear;
  @keyframes drift {
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
  }
  z-index: 0;
`

const ErrorCode = styled.h3`
  font-size: 100px;
  opacity: .7;
  margin: 0;
  z-index: 1;
  color: #BDBDBD;
`

const Message = styled(ErrorCode)`
  font-size: 60px;
`

export default NotFound
