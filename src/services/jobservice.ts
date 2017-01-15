import { Job } from '../models/job';
import { autoinject } from 'aurelia-framework';

@autoinject
export class JobService{
    public GetJobs():Job[]{
        return [
            {
                Employer: {
                    Name: "Digic Pictures",
                    Description: "dest",
                    HomePage: "http://digicpictures.com",
                    LogoUrl: "http://"
                },
                From: new Date("2015-10-00"),
                Until: null,
                JobTitle: "Production developer / Senior developer",
                Projects: [

                ],
                Responsibilities: ""
            }
        ];
    }
}