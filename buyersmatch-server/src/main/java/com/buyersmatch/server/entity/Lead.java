package com.buyersmatch.server.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "leads")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(name = "mobile_number")
    private String mobileNumber;

    private String source;

    private String category;

    private String quality;

    @Column(length = 2000)
    private String remark;
}
