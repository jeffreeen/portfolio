import { FlexContainer } from "../../../components/FlexContainer";
import { Project } from "../../../components/project/Project";
import Rectangle18 from '../../../assets/images/Rectangle18.png'


export const MyProjects = () => {
    return (  
            <FlexContainer align="center" justify="center" direction="column">
                <h2>Projects</h2>
                <p>Things I’ve built so far</p>
                <FlexContainer>
                    <Project linkImage={Rectangle18} 
                             title={'Project Tile goes here'} 
                             description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} 
                             stack={'HTML , JavaScript, SASS, React'} />
                </FlexContainer>
            </FlexContainer>
    );
};
