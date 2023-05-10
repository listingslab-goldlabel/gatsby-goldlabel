import React from "react"
import {
    Avatar,
    Card,
    CardHeader,
    ButtonBase,
} from "@mui/material"
import {
    Font,
    useGQLMeta,
    usePwaSelect,
    usePwaDispatch,
    selectPWA,
    startApp,
} from "../"

export default function Site(props: any) {
    const dispatch = usePwaDispatch()
    const {app} = props
    const pwa = usePwaSelect(selectPWA)
    const site = useGQLMeta()
    const {
        siteTitle,
        siteDescription,
        siteIcon,
    } = site

    React.useEffect(() => {
        const {started} = pwa
        if(!started) dispatch(startApp(app))
    }, [pwa])
  

    return (
    <>
    <ButtonBase 
        sx={{
            display:"block",
            textAlign: "left",
            width: "100%",
        }}
        onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            console.log("Site")
            window.open("/?restart", "_self")
        }}>
        <Card>
            <CardHeader
                avatar={<Avatar src={siteIcon} alt={`${siteTitle} ${siteDescription}`}/>}
                title={ <Font variant="title">
                            {siteTitle}
                        </Font>}
                subheader={<Font variant="description">
                                {siteDescription}
                            </Font>}
            />
            <pre>{JSON.stringify(pwa, null, 2)}</pre>
        </Card>
    </ButtonBase>
    </>
    )
}

/*
<pre>{JSON.stringify(site, null, 2)}</pre>
*/