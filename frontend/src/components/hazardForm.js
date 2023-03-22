import React, {Component} from 'react'
import Hazards1 from './hazards1';
import Hazards2 from './hazards2';
import Ppe1 from './ppe1';
import Jobsteps from './jobsteps';
import Identifyhazards from './identifyhazards';
import Eliminate from './eliminate';
import Signatures from './signatures';

export default class HazardForm extends Component {
    state = {
        formVersionNum: this.getPermitNum,
        step: 1,
        jobID: 1,
        employeeID: 1,
        empPhone: '',
        musterPoint: '',
        date: Date().toLocaleString().substring(0, 16),
        time: Date().toLocaleString().substring(16, 21),
        // hazards               
        accessExit: false,
        airborne: false,
        barricade: false,
        blindBlankDisc: false,
        codeOfPrac: false,
        confined: false,
        depressurized: false,
        diesel: false,
        drainage: false,
        emergPlan: false,
        extension: false,
        fall: false,
        openings: false,
        genHouse: false,
        grounding: false,
        h2s: false,
        heavy: false,
        hygiene: false,
        lighting: false,
        ladders: false,
        lifting: false,
        loadSecure: false,
        locked: false,
        manlift: false,
        mobile: false,
        msdsRev: false,
        powerLine: false,
        parking: false,
        pinch: false,
        powerTool: false,
        handAndStore: false,
        pubSafe: false,
        respPro: false,
        safeWatch: false,
        safeWorkPrac: false,
        scaffold: false,
        smokeOrNo: false,
        spillPrevResp: false,
        steam: false,
        tdgPlacards: false,
        traffic: false,
        vapors: false,
        vehicleInspections: false,
        ventilation: false,
        visibility: false,
        wasteManage: false,
        weatherExtremes: false,
        workerTraining: false,
        workingAlone: false,
        heights: false,
        workSiteEntry: false,
        // PPE
        chemProtect: false,
        cotton: false,
        communicationDev: false,
        fireResist: false,
        hardHat: false,
        hearing: false,
        highVis: false,
        Gloves: false,
        Goggles: false,
        lifeline: false,
        gasMon: false,
        safeLight: false,
        safeGlasses: false,
        steelToed: false,
        //text fields
        jobSteps: '',
        idenHaz: '',
        eliminate: '',
        //canvas
        signatures: '',
    }

    // go back to previous page
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // go to next page
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handler for input
    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    }

    // save input to local storage
    SaveAndExit = ({values}) => {
        const fileName = 'v' + this.state.formVersionNum + ' ' + this.state.jobID + ' ' + '.json';
        localStorage.setItem(fileName, JSON.stringify({values}));
        this.setState({
            formVersionNum: this.state.formVersionNum + 1,
        });
        return redirect('/forms');
    }

    async getFormID() {
        try {
            await fetch("http://localhost:3000/backend/getPermitID.php", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                if (response.ok) {
                    return JSON.parse(response)
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    async uploadData() {
        try {
            await fetch("http://localhost:3000/backend/upload.php", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    AccessExit: this.state.accessExit,
                    Airborne_Particles: this.state.airborne,
                    BarricadeFlag_Area: this.state.barricade, 
                    BlindedBlankedDisconnected: this.state.blindBlankDisc, 
                    Chemical_Protection_Clothing: this.state.chemProtect, 
                    Code_Of_Practice: this.state.codeOfPrac,
                    Communication_Device: this.state.communicationDev, 
                    Confined_Space_Entry: this.state.confined, 
                    Cotton_Coveralls: this.state.cotton, 
                    Date_Time: this.state.date + ' ' + this.state.time, 
                    Depressurized: this.state.depressurized, 
                    Diesel_Emergency_Shut_Down: this.state.diesel, 
                    Drainage: this.state.drainage, 
                    Emergency_Response_Plan_Review: this.state.emergPlan, 
                    employee_ID: this.state.employeeID, 
                    Emp_Phone: this.state.empPhone, 
                    Extension_Cords: this.state.extension, 
                    Fall_Protection: this.state.fall, 
                    Fire_Resistant_Clothing: this.state.fireResist, 
                    FloorRoof_Openings: this.state.openings, 
                    General_Housekeeping: this.state.genHouse, 
                    Gloves: this.state.Gloves, 
                    Goggles: this.state.Goggles,
                    Grounding: this.state.grounding, 
                    H2S: this.state.h2s, 
                    Hard_Hat: this.state.hardHat, 
                    Hearing_Protection: this.state.hearing, 
                    Heavy_Lifting: this.state.heavy, 
                    High_Visibility_Clothing: this.state.highVis, 
                    Hygiene_Program: this.state.hygiene, 
                    Identified_Hazards: this.state.idenHaz, 
                    Intrinsically_Safe_Lighting: this.state.safeLight, 
                    job_ID: this.state.jobID, 
                    Ladders: this.state.ladders, 
                    LifelineLanyardSafety_Harness: this.state.lifeline, 
                    Lifting_Devices_and_Rigging: this.state.lifting, 
                    Lighting: this.state.lighting, 
                    Load_Secured: this.state.loadSecure, 
                    LockedTagged: this.state.locked, 
                    Manlift: this.state.manlift, 
                    Mobile_Equipment: this.state.mobile, 
                    MSDS_Reviewed: this.state.msdsRev, 
                    Muster_Point: this.state.musterPoint, 
                    Overhead_Power_Lines: this.state.powerLine, 
                    ParkingFencing: this.state.parking, 
                    Personal_Gas_Monitor: this.state.gasMon, 
                    Pinch_Points: this.state.pinch, 
                    Power_Tools: this.state.powerTool, 
                    Product_Handling_and_Storage: this.state.handAndStore, 
                    Public_Safety: this.state.pubSafe, 
                    Required_Action_To_Eliminate_Hazards: this.state.eliminate, 
                    Respiratory_Protection: this.state.respPro, 
                    Safety_Glasses: this.state.safeGlasses, 
                    Safety_Watch: this.state.safeWatch, 
                    Safe_Working_Practices: this.state.safeWorkPrac, 
                    Scaffolding: this.state.scaffold, 
                    ScaffoldLadder: this.state.ladders, 
                    Sequence_Of_Basic_Job_Steps: this.state.jobSteps, 
                    SmokingNo_Smoking_Rules: this.state.smokeOrNo, 
                    Spill_Prevention_and_Response: this.state.spillPrevResp, 
                    SteamWashed: this.state.steam, 
                    Steel_Toed_Boots: this.state.steelToed, 
                    TDG_Placards: this.state.tdgPlacards, 
                    Traffic: this.state.traffic, 
                    VaporsOdours: this.state.vapors,
                    Vehicle_Inspections: this.state.vehicleInspections, 
                    Ventilation: this.state.ventilation, 
                    Visibility: this.state.visibility, 
                    Waste_Management: this.state.wasteManage, 
                    Weather_Extremes: this.state.weatherExtremes, 
                    Worker_Training: this.state.workerTraining, 
                    Working_Alone: this.state.workingAlone, 
                    Working_with_Heights: this.state.heights, 
                    Work_Site_Entry: this.state.workSiteEntry
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        console.log('Success', response);
                        localStorage.setItem(this.state.date + ' ' + this.state.jobID, response)
                        return response.json()
                    }
                    throw new Error('error')
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    render() {
        const { step } = this.state;
        const {
            formVersionNum,
            employeeID,
            jobID,
            date,
            time,
            musterPoint,
            accessExit,
            airborne,
            barricade,
            blindBlankDisc,
            chemProtect,
            codeOfPrac,
            communicationDev,
            confined,
            cotton,
            depressurized,
            diesel,
            drainage,
            emergPlan,
            extension,
            fall,
            fireResist,
            openings,
            genHouse,
            Gloves,
            Goggles,
            grounding,
            h2s,
            hardHat,
            hearing,
            heavy,
            highVis,
            hygiene,
            safeLight,
            ladders,
            lifeline,
            lifting,
            lighting,
            loadSecure,
            locked,
            manlift,
            mobile,
            msdsRev,
            powerLine,
            parking,
            gasMon,
            pinch,
            powerTool,
            handAndStore,
            pubSafe,
            respPro,
            safeGlasses,
            steelToed,
            jobSteps,
            idenHaz,
            eliminate,
            signatures,
            safeWatch,
            safeWorkPrac,
            scaffold,
            smokeOrNo,
            spillPrevResp,
            steam,
            tdgPlacards,
            traffic,
            vapors,
            vehicleInspections,
            ventilation,
            visibility,
            wasteManage,
            weatherExtremes,
            workerTraining,
            workingAlone,
            heights,
            workSiteEntry,
        } = this.state;
        const values = {
            formVersionNum,
            employeeID,
            jobID,
            date,
            time,
            musterPoint,
            accessExit,
            airborne,
            barricade,
            blindBlankDisc,
            chemProtect,
            codeOfPrac,
            communicationDev,
            confined,
            cotton,
            depressurized,
            diesel,
            drainage,
            emergPlan,
            extension,
            fall,
            fireResist,
            openings,
            genHouse,
            Gloves,
            Goggles,
            grounding,
            h2s,
            hardHat,
            hearing,
            heavy,
            highVis,
            hygiene,
            safeLight,
            ladders,
            lifeline,
            lifting,
            lighting,
            loadSecure,
            locked,
            manlift,
            mobile,
            msdsRev,
            powerLine,
            parking,
            gasMon,
            pinch,
            powerTool,
            handAndStore,
            pubSafe,
            respPro,
            safeGlasses,
            steelToed,
            jobSteps,
            idenHaz,
            eliminate,
            signatures,
            safeWatch,
            safeWorkPrac,
            scaffold,
            smokeOrNo,
            spillPrevResp,
            steam,
            tdgPlacards,
            traffic,
            vapors,
            vehicleInspections,
            ventilation,
            visibility,
            wasteManage,
            weatherExtremes,
            workerTraining,
            workingAlone,
            heights,
            workSiteEntry,
        }

        switch (step) {
            case 1:
                return (
                    <Hazards1
                        SaveAndExit={this.SaveAndExit}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Hazards2
                        prevStep={this.prevStep}
                        SaveAndExit={this.SaveAndExit}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Ppe1
                        prevStep={this.prevStep}
                        SaveAndExit={this.SaveAndExit}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Jobsteps
                        prevStep={this.prevStep}
                        SaveAndExit={this.SaveAndExit}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <Identifyhazards
                        prevStep={this.prevStep}
                        SaveAndExit={this.SaveAndExit}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 6:
                return (
                    <Eliminate
                        prevStep={this.prevStep}
                        SaveAndExit={this.SaveAndExit}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 7:
                return (
                    <Signatures
                        prevStep={this.prevStep}
                        SaveAndExit={this.SaveAndExit}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:
            // do nothing
        }
    }
}
