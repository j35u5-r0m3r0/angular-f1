export interface TeamResultsResp {
    MRData: MRData;
}

export interface MRData {
    xmlns:     string;
    series:    string;
    url:       string;
    limit:     string;
    offset:    string;
    total:     string;
    RaceTable: RaceTable;
}

export interface RaceTable {
    constructorId: string;
    Races:         Race[];
}

export interface Race {
    season:   string;
    round:    string;
    url:      string;
    raceName: string;
    Circuit:  Circuit;
    date:     Date;
    Results:  Result[];
}

export interface Circuit {
    circuitId:   string;
    url:         string;
    circuitName: string;
    Location:    Location;
}

export interface Location {
    lat:      string;
    long:     string;
    locality: string;
    country:  string;
}

export interface Result {
    number:       string;
    position:     string;
    positionText: string;
    points:       string;
    Driver:       Driver;
    Constructor:  Constructor;
    grid:         string;
    laps:         string;
    status:       string;
}

export interface Constructor {
    constructorId: string;
    url:           string;
    name:          string;
    nationality:   string;
}

export interface Driver {
    driverId:    string;
    url:         string;
    givenName:   string;
    familyName:  string;
    dateOfBirth: Date;
    nationality: string;
}