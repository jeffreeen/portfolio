import { FlexContainer } from "../../../components/FlexContainer";
import { Project } from "../../../components/project/Project";
import Rectangle18 from '../../../assets/images/Rectangle18.png'
import Rectangle16 from '../../../assets/images/Rectangle16.png'
import Rectangle8 from '../../../assets/images/Rectangle8.png'
import Rectangle24 from '../../../assets/images/Rectangle24.png'
import Rectangle23 from '../../../assets/images/Rectangle23.png'
import Rectangle22 from '../../../assets/images/Rectangle22.png'
import { TitleSection } from "../../../components/TitleSection";
import { Container } from "../../../components/Container";
import { S } from "./MyProjects_Styles";


const projectData = [
    {
        linkImage: Rectangle18,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack:'HTML , JavaScript, SASS, React'
    },
    {
        linkImage: Rectangle16,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack:'HTML , JavaScript, SASS, React'
    },
    {
        linkImage: Rectangle8,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack:'HTML , JavaScript, SASS, React'
    },
    {
        linkImage: Rectangle24,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack:'HTML , JavaScript, SASS, React'
    },
    {
        linkImage: Rectangle23,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack:'HTML , JavaScript, SASS, React'
    },
    {
        linkImage: Rectangle22,
        title: 'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        stack:'HTML , JavaScript, SASS, React'
    }
]

export const MyProjects: React.FC = () => {
    return (
        <S.StyledMyProjects>
            <Container>
                <FlexContainer align="center" justify="center" direction="column">
                    <TitleSection>Projects</TitleSection>
                    <S.StyledDescription>Things I’ve built so far</S.StyledDescription>
                    <S.GridContainer>
                        {projectData.map((p)=>{
                            return  <Project linkImage={p.linkImage}
                                            title={p.title}
                                            description={p.description}
                                            stack={p.stack} />
                        })}
                    </S.GridContainer>
                </FlexContainer>
            </Container>
        </S.StyledMyProjects>
    );
};

