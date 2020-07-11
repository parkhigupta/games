package com.game.ludo.service.impl;

import com.game.ludo.dto.Game;
import com.game.ludo.service.LudoService;
import org.springframework.stereotype.Service;

@Service
public class LudoServiceImpl implements LudoService {

    @Override
    public void playGame() {
        Game game = new Game();

    }
}
