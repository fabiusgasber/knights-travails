export class AdjacencyList {
    constructor(coordinates = []) {
        if(AdjacencyList.checkCoordinates(coordinates)) {
            this.coordinates = coordinates;
            this.list = Array.from({ length: 8}, () => new Array());
            this.#setEdges();
        }
    }

    getCoordinate = () => {
        if(!this.coordinates) return null;
        return this.coordinates;
    }

    getList = () => {
        if(!this.list) return null;
        return this.list;
    }

    #setEdges = () => {
        const moveOneUp = this.coordinates[0] + 1;
        const moveOneDown = this.coordinates[0] - 1;
        const twoStepsFor = this.coordinates[1] + 2;
        const twoStepsBack = this.coordinates[1] - 2;

        const moveTwoUp = this.coordinates[0] + 2;
        const moveTwoDown = this.coordinates[0] - 2;
        const oneStepFor = this.coordinates[1] + 1;
        const oneStepBack = this.coordinates[1] - 1;

        if(moveOneUp < 8 && this.list[moveOneUp]) { // check if index is inbound
            if(twoStepsBack < 8 && twoStepsBack >= 0) this.list[moveOneUp].push(twoStepsBack);
            if(twoStepsFor < 8 && twoStepsFor >= 0) this.list[moveOneUp].push(twoStepsFor);
        }
        if(moveOneDown >= 0 && this.list[moveOneDown]){
            if(twoStepsBack >= 0 && twoStepsBack < 8) this.list[moveOneDown].push(twoStepsBack);
            if(twoStepsFor < 8 && twoStepsFor >= 0) this.list[moveOneDown].push(twoStepsFor);
        }
        if(moveTwoUp < 8 && this.list[moveTwoUp]) { // check if index is inbound
            if(oneStepBack < 8 && oneStepBack >= 0) this.list[moveTwoUp].push(oneStepBack);
            if(oneStepFor < 8 && oneStepFor >= 0) this.list[moveTwoUp].push(oneStepFor);
        }
        if(moveTwoDown >= 0 && this.list[moveTwoDown]){
            if(oneStepBack < 8 && oneStepBack >= 0) this.list[moveTwoDown].push(oneStepBack);
            if(oneStepFor < 8 && oneStepFor >= 0) this.list[moveTwoDown].push(oneStepFor);
        }
    }

    static checkCoordinates = (coordinates) => {
        return (coordinates && Array.isArray(coordinates) && coordinates.length === 2 && coordinates[0] >= 0 && coordinates[0] <= 7 && coordinates[1] >= 0 && coordinates[1] <= 7);
    }
}