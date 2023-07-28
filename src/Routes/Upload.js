import { Box, Button, Container, Grid, List, Paper, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const imageDataTypes = {
    name: 'string',
    description: 'string',
    file: 'file',
}

function Upload() {
    const [imageData, setImageData] = useState([]);
    const [accessCode, setAccessCode] = useState('');
    const [hasAccess, setHasAccess] = useState(true);
    //client can change if want, but server will double check on upload later on
    //its just a deterrent to prevent most people from uploading
    const [isWorking, setIsWorking] = useState(false);

    const addImageData = () => {
        setImageData([{
            anime: '',
            focus: '',
            anime_season: '',
            anime_episode: '',
            anime_character: '',
            tags: '',
            file: null,
        }, ...imageData]);
    }

    const updateImageData = (index, key, value) => {
        let temp = [...imageData];
        temp[index][key] = value;
        setImageData(temp);
    }

    const removeImageData = (index) => {
        let temp = [...imageData];
        temp.splice(index, 1);
        setImageData(temp);
    }

    const uploadImages = () => {
        setIsWorking(true);
    }

    return (
        <Grid>
            <Paper sx={{
                p: 1
            }}>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        flexGrow: 1,
                    }}>
                        <TextField disabled={isWorking} sx={{ flexGrow: 1 }} onChange={e => setAccessCode(e.target.value)} label="Access key" variant="standard" />
                        <Button disabled={isWorking}>Validate</Button>
                    </Box>
                    {
                        hasAccess && (
                            <>
                                <Box sx={{
                                    display: 'flex',
                                    mt: 1, mb: 1
                                }}>
                                    <Button onClick={uploadImages} disabled={isWorking || imageData.length===0}>Upload All</Button>
                                    <Button onClick={addImageData} disabled={isWorking}>Add Image</Button>
                                </Box>
                                <Stack spacing={2}>
                                    {
                                        imageData.map((image, index) => {
                                            return (
                                                <Paper elevation={4} key={index} sx={{
                                                    p: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={6}>
                                                            {/* image data and upload field */}
                                                            <Box sx={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                pb: 1,
                                                            }}>
                                                                <Typography sx={{
                                                                    alignSelf: 'flex-start',
                                                                }} variant="h6">Image {index + 1}</Typography>
                                                                <Button disabled={isWorking} sx={{
                                                                    alignSelf: 'flex-end',
                                                                }} onClick={() => {
                                                                    removeImageData(index);
                                                                }}><DeleteIcon /></Button>
                                                            </Box>
                                                            <Stack spacing={1}>
                                                                <TextField disabled={isWorking} sx={{ flexGrow: 1 }} onChange={e => {
                                                                    updateImageData(index, 'anime', e.target.value);
                                                                }} label={"Anime (Sword Art Online)"} variant="standard" />
                                                                <TextField disabled={isWorking} sx={{ flexGrow: 1 }} onChange={e => {
                                                                    updateImageData(index, 'anime_season', e.target.value);
                                                                }} label={"Season (Sword Art Online: Alicization - War of Underworld)"} variant="standard" />
                                                                <TextField disabled={isWorking} sx={{ flexGrow: 1 }} onChange={e => {
                                                                    updateImageData(index, 'anime_episode', e.target.value);
                                                                }} label={"Episode (2)"} variant="standard" />
                                                                <TextField disabled={isWorking} sx={{ flexGrow: 1 }} onChange={e => {
                                                                    updateImageData(index, 'anime_character', e.target.value);
                                                                }} label={"Character (Yuuki Asuna)"} variant="standard" />
                                                                <TextField disabled={isWorking} sx={{ flexGrow: 1 }} onChange={e => {
                                                                    updateImageData(index, 'focus', e.target.value);
                                                                }} label={"Bodypart Focus (Thighs)"} variant="standard" />
                                                                <TextField disabled={isWorking} sx={{ flexGrow: 1 }} onChange={e => {
                                                                    updateImageData(index, 'tags', e.target.value);
                                                                }} label={"Tags (sword, art, online, thighs, alicization)"} variant="standard" />
                                                                {/* <input type="file" onChange={e => {
                                                                    updateImageData(index, 'file', e.target.files[0]);
                                                                }} /> */}
                                                                <Box sx={{
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                }}>
                                                                    <Button disabled={isWorking} variant="outlined" component="label">
                                                                        Select File
                                                                        <input type="file" onChange={e => {
                                                                            updateImageData(index, 'file', e.target.files[0]);
                                                                        }} hidden/>
                                                                    </Button>
                                                                </Box>
                                                            </Stack>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            {/* preview image, make it fit inside grid */}
                                                            {
                                                                image.file ? (
                                                                    <Box sx={{
                                                                        backgroundImage: `url(${URL.createObjectURL(image.file)})`,
                                                                        backgroundSize: 'contain',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundPosition: 'center',
                                                                        width: '100%',
                                                                        height: '100%'
                                                                    }}></Box>
                                                                ) : (
                                                                    <Paper sx={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                    }}>
                                                                        <Typography variant="h6">No Image</Typography>
                                                                    </Paper>
                                                                )
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                    {/* <Box sx={{pb:1, display: 'flex'}}>
                                                        <TextField sx={{flexGrow: 1}} onChange={e => {
                                                            updateImageData(index, 'name', e.target.value);
                                                        }} label="Name" variant="standard" />
                                                        <TextField sx={{flexGrow: 1}} onChange={e => {
                                                            updateImageData(index, 'description', e.target.value);
                                                        }} label="Description" variant="standard" />
                                                        <Button onClick={() => {
                                                            removeImageData(index);
                                                        }}><DeleteIcon /></Button>
                                                    </Box>
                                                    <input type="file" onChange={e => {
                                                        updateImageData(index, 'file', e.target.files[0]);
                                                    }} /> */}
                                                </Paper>
                                            )
                                        })
                                    }
                                </Stack>
                            </>
                        )
                    }
                </Container>
            </Paper>
        </Grid>
    )
}

export default Upload;