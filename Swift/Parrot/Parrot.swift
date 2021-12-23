import Foundation

class Parrot {
    let numberOfCoconuts: Int
    let baseSpeed: Double = 12.0

    init(numberOfCoconuts: Int) {
        self.numberOfCoconuts = numberOfCoconuts
    }

}

class EuropeanParrot: Parrot {
    var speed: Double {
        return baseSpeed
    }
}

class AfricanParrot: Parrot {

    let numberOfCoconutss: Int

    override init(numberOfCoconuts: Int) {
        self.numberOfCoconutss = numberOfCoconuts
        super.init(numberOfCoconuts: numberOfCoconuts)
    }

    var speed: Double {
        let loadFactor: Double = 9.0
        let speedByFactor = loadFactor * Double(numberOfCoconuts)
        return max(0, baseSpeed - speedByFactor)
    }
}

class NorwegianBlueParrot: Parrot {

    let voltage: Double
    let isNailed: Bool

    init(numberOfCoconuts: Int, voltage: Double, isNailed: Bool) {
        self.voltage = voltage
        self.isNailed = isNailed
        super.init(numberOfCoconuts: numberOfCoconuts)
    }

    var speed: Double {
        return (isNailed) ? 0 : baseSpeed(voltage: voltage)
    }
    
    private func baseSpeed(voltage: Double) -> Double {
        return min(24.0, voltage * baseSpeed)
    }
}
