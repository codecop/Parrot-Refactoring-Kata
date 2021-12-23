import Foundation

class Parrot {
    private let parrotType: ParrotTypeEnum
    private let numberOfCoconuts: Int
    private let voltage: Double
    private let isNailed: Bool
    private let loadFactor: Double = 9.0
    private let baseSpeed: Double = 12.0
    
    init(_ parrotType: ParrotTypeEnum, numberOfCoconuts: Int, voltage: Double, isNailed: Bool) {
        self.parrotType = parrotType
        self.numberOfCoconuts = numberOfCoconuts
        self.voltage = voltage
        self.isNailed = isNailed
    }
    
    var speed: Double {
        switch parrotType {
        case .european:
            return baseSpeed

        case .african:
            return max(0, baseSpeed - loadFactor * Double(numberOfCoconuts));
            
        case .norwegianBlue:
            return (isNailed) ? 0 : baseSpeed(voltage: voltage)
        }
    }

    private func baseSpeed(voltage: Double) -> Double {
        return min(24.0, voltage * baseSpeed)
    }
}

class EuropeanParrot: Parrot {

}

class AfricanParrot: Parrot {

}

class NorwegianBlueParrot: Parrot {

}
