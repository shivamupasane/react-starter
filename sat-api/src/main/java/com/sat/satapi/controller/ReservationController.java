package com.sat.satapi.controller;

import com.sat.satapi.model.OfficeDetails;
import com.sat.satapi.model.ReservationDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RequestMapping(value = "api/reservation")
@RestController
public class ReservationController {
    @GetMapping("officeList")
    public ReservationDetails getOfficeLIst(){
        ReservationDetails reservationDetails = new ReservationDetails();
        ArrayList<OfficeDetails> offices = new ArrayList<OfficeDetails>();
        offices.add(new Object(''));
        reservationDetails.setOfficeList(offices);
        return reservationDetails;
    }

}