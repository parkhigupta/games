package com.game.ludo.dto;

import java.util.ArrayList;
import java.util.List;

public class Game {

    String[][] board = new String[15][15];
    List<Player> players = new ArrayList<>();
    List<Token> tokens = new ArrayList<>();
}
