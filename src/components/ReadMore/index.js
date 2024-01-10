import {useState} from 'react'
import {
  MainContainer,
  Heading,
  Para,
  Paraa,
  ReactImage,
  ReadButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const strArray = reactHooksDescription.split(' ')
  const lessContent = strArray.slice(0, 27).join(' ')

  const [Content, setContent] = useState(false)

  const onClickBtn = () => {
    setContent(prevStatus => !prevStatus)
  }

  return (
    <>
      <MainContainer>
        <Heading>React Hooks</Heading>
        <Para>Hooks are a new addition to React</Para>
        <ReactImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Paraa>{Content ? reactHooksDescription : lessContent}</Paraa>
        <ReadButton type="submit" onClick={onClickBtn}>
          {Content ? 'Read Less' : 'Read More'}
        </ReadButton>
      </MainContainer>
    </>
  )
}

export default ReadMore
