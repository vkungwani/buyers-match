package com.buyersmatch.server.service;

import com.buyersmatch.server.entity.Lead;
import com.buyersmatch.server.repository.LeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeadService {

    private final LeadRepository leadRepository;

    @Autowired
    public LeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    public Lead createLead(Lead lead) {
        return leadRepository.save(lead);
    }

    public List<Lead> getAllLeads() {
        return leadRepository.findAll();
    }

    public Optional<Lead> getLeadById(Long id) {
        return leadRepository.findById(id);
    }

    public Lead updateLead(Long id, Lead leadDetails) {
        return leadRepository.findById(id).map(lead -> {
            lead.setName(leadDetails.getName());
            lead.setEmail(leadDetails.getEmail());
            lead.setMobileNumber(leadDetails.getMobileNumber());
            lead.setSource(leadDetails.getSource());
            lead.setCategory(leadDetails.getCategory());
            lead.setQuality(leadDetails.getQuality());
            lead.setRemark(leadDetails.getRemark());
            return leadRepository.save(lead);
        }).orElseThrow(() -> new RuntimeException("Lead not found with id " + id));
    }

    public void deleteLead(Long id) {
        leadRepository.deleteById(id);
    }
}
