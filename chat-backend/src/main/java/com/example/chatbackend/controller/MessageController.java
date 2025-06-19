package com.example.chatbackend.controller;

import com.example.chatbackend.model.Message;
import com.example.chatbackend.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "http://localhost:4200")
public class MessageController {
    @Autowired
    private MessageService service;

    @PostMapping
    public ResponseEntity<Message> sendMessage(@RequestBody Message message) {
        return ResponseEntity.ok(service.save(message));
    }

    @GetMapping
    public List<Message> getAllMessages() {
        return service.findAll();
    }
}
