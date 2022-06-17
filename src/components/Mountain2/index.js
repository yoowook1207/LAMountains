import {Mountain2Container,Mountain2Bg, Mountain2Contents, BgImg, ScheduleContainer,Title,ScheduleContents, ScheduleBox,Date,Cont} from './Mountain2Elements.js'
import mountain2Bg from './../../images/Bg2-2.png'


const Mountain2 = () => {
    return (
        <>
        <Mountain2Container>

            <Mountain2Bg>
                <BgImg src={mountain2Bg} alt="mountain lake"/>
            </Mountain2Bg>

            <Mountain2Contents>
                <ScheduleContainer>
                    <ScheduleBox>
                        <Title>
                            SCHEDULE
                        </Title>
                        <ScheduleContents>

                            <Date>
                                17 Nov 2016
                            </Date>
                            <Cont>
                                Vestibulum viverra
                            </Cont>

                            <Date>
                                <br/>
                            </Date>
                            <Cont>
                                <br/>
                            </Cont>

                            <Date>
                                13 Dec 2016
                            </Date>
                            <Cont>
                                Vestibulum viverra
                            </Cont>

                            <Date>
                                28 Dec 2016
                            </Date>
                            <Cont>
                                Vestibulum viverra
                            </Cont> 

                            <Date>
                                <br/>
                            </Date>
                            <Cont>
                                <br/>
                            </Cont>

                            <Date>
                                9 Feb 2017
                            </Date>
                            <Cont>
                                Vestibulum viverra
                            </Cont>

                        </ScheduleContents>
                    </ScheduleBox>
                </ScheduleContainer>
            </Mountain2Contents>

        </Mountain2Container>
        </>
    )
}

export default Mountain2