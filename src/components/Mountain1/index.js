import {Mountain1Container,Mountain1Bg, Mountain1Contents, BgImg, ScheduleContainer,Title,ScheduleContents, ScheduleBox,Date,Cont} from './Mountain1Elements.js'
import mountain1Bg from './../../images/Bg2-1.png'


const Mountain1 = () => {
    return (
        <>
        <Mountain1Container>

            <Mountain1Bg>
                <BgImg src={mountain1Bg} alt="mountain lake"/>
            </Mountain1Bg>

            <Mountain1Contents>
                <ScheduleContainer>
                    <ScheduleBox>
                        <Title>
                            SCHEDULE
                        </Title>
                        <ScheduleContents>

                            <Date>
                                25 Nov 2016
                            </Date>
                            <Cont>
                                Vestibulum viverra
                            </Cont>

                            <Date>
                                28 Nov 2016
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
                                18 Dec 2016
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
                                7 Jan 2017
                            </Date>
                            <Cont>
                                Vestibulum viverra
                            </Cont>

                        </ScheduleContents>
                    </ScheduleBox>
                </ScheduleContainer>
            </Mountain1Contents>

        </Mountain1Container>
        </>
    )
}

export default Mountain1