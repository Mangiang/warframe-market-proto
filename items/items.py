from items.void_relics import VoidRelics


class Items :
    def __init__(self, data):
        self.void_relics = VoidRelics(data['void_relics'])