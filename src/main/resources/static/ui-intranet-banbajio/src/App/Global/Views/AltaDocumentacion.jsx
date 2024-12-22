import React, { useState } from 'react';
import { Box, Button, Typography, LinearProgress, IconButton } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IneAnverso from '../../../assets/INE_ANVERSO.png'
import IneReverso from '../../../assets/INE_REVERSO.jpeg'

const DocumentsProgress = ({onNext, documents}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        if (currentStep < documents.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            onNext();
        }
    };

    const progressPercentage = Math.round(((currentStep + 1) / documents.length) * 100);

    return (
        <Box
            p={4}
            height="100%"
            display="flex"
            flexDirection="column"
            sx={{ '& .MuiTextField-root': { m: 1 } }}
        >
            <Typography variant="h5" gutterBottom>
                EXPEDIENTE DIGITAL
            </Typography>
            <Typography fontSize={"10px"}>
                ID De Evaluacion: 29921
            </Typography>
            <Box width="100%" mb={4} mt={5}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Progreso: {progressPercentage}%
                </Typography>
                <LinearProgress variant="determinate" value={progressPercentage} />
            </Box>

            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                gap={2}
                width="100%"
                mb={4}
            >
                {documents.map((doc, index) => (
                    <Box sx={{
                        width: '150px',
                        height: '220px',
                        border: '1px solid',
                        borderColor: currentStep >= index ? 'green' : 'grey.400',
                        borderRadius: 2,
                        p: 1,
                        backgroundColor: currentStep >= index ? 'green.50' : 'white',
                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {currentStep <= index?
                            <>
                            {doc.title == 'IDENTIFICACION OFICINAL ANVERSO' ?
                            <img src={IneAnverso} style={{width: '80px', height: '50px'}}/>
                            : doc.title == 'IDENTIFICACION OFICINAL REVERSO' ?
                            <img src={IneReverso} style={{width: '80px', height: '50px'}}/>
                            :
                            <InsertDriveFileIcon sx={{ width: '50px', height: '50px', color:'#0c82cf' }} />
                            }
                            </>
                            :
                            <CheckCircleIcon sx={{ width: '50px', height: '50px', color: 'green' }} />
                            }
                            <Box p={1}>
                                <Typography textAlign={"center"} fontSize={"10px"}>{doc.title}</Typography>
                            </Box>
                            {doc.print?
                            <Button disabled={currentStep != index} fullWidth variant="outlined">
                                <DownloadIcon style={{ marginRight: 8 }} /> DESCARGAR
                            </Button>
                            :null
                            }
                            <hr />
                            {doc.scan?
                            <Button disabled={currentStep != index} fullWidth variant="outlined">
                                <FileUploadIcon style={{ marginRight: 8 }} /> CARGAR
                            </Button>
                            :null
                            }
                        </Box>


                    </Box>
                ))}
            </Box>
            <Button
                variant="contained"
                size="large"
                color="primary"
                disabled={currentStep >= documents.length}
                onClick={handleNextStep}
            >
                {currentStep < documents.length - 1 ? 'SIGUIENTE' : 'FINALIZAR'}
            </Button>
        </Box>
    );
};

export default DocumentsProgress;
