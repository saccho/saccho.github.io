import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  level: number;
}

type StyleProps = {
  width: number;
}

const Skill: React.FC<Props> = (props) => {
  const width = props.level / 6 * 100

  return(
    <Wrapper>
      <Bar width={width}>
        {props.name}
      </Bar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #EEEEEE;
  width: 95%;
`

const Bar = styled(Wrapper)`
  width: ${(props: StyleProps) => props.width}%;
  background: linear-gradient(to right, #BBDEFB 0%, #B2EBF2 100%);
  @keyframes sizeScale {
    from {
      width: 0%;
    }
  }
  animation: sizeScale 1s ease;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
  height: 21px;
`

export default Skill;
