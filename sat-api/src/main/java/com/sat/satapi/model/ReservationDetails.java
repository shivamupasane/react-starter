package com.sat.satapi.model;

import lombok.Data;

import java.util.List;
@Data
public class ReservationDetails {
    private List<OfficeDetails> officeList;
}
