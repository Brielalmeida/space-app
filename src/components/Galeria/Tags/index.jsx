import styled from 'styled-components'
import tags from './tags.json'

const TagContainer = styled.div`
    display: flex;
    gap: 64px;
    margin-top: 56px;

    p {
        font-size: 24px;
        color: #d9d9d9;
    }

`

const BotoesContainer = styled.div`
    display: flex;
    gap: 24px;

    button {
        font-size: 24px;
        color: #FFFFFF;
        background: rgba(217, 217, 217, 0.3);
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        padding: 12px;
        box-sizing: border-box;
        border: 2px solid transparent;
        &:hover {
        border-color: #C98CF1;
    }
    }
`

const Tags = ({setTag}) => {
  return (
    <TagContainer>
        <p>Busque por tags:</p>
        <BotoesContainer>
            {tags.map(tag => <button onClick={() => setTag(tag.id)} key={tag.id}>{tag.titulo}</button>)}
        </BotoesContainer>
    </TagContainer>
  )
}

export default Tags