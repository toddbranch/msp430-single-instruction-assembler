// msp430 single line assembler

// convert emulated instruction to its actual equivalent
function getActualInstructionFromEmulated(emulatedInstr)
{
	var instr = '';

	
}

// return true if the instruction is emulated
function isEmulatedInstruction(instr)
{

}

function getInstructionType(opcode)
{
	var instrType = '';

	opcode = opcode.toLowerCase();

	switch(opcode)
	{
		case 'rrc':
		case 'swpb':
		case 'rra':
		case 'sxt':
		case 'push':
		case 'call':
		case 'reti':
			instrType = 'single';
			break;
		case 'jne':
		case 'jnz':
		case 'jeq':
		case 'jz':
		case 'jnc':
		case 'jlo':
		case 'jc':
		case 'jhs':
		case 'jn':
		case 'jge':
		case 'jl':
		case 'jmp':
				instrType = 'jump';
				break;
		case 'mov':
		case 'add':
		case 'addc':
		case 'subc':
		case 'sub':
		case 'cmp':
		case 'dadd':
		case 'bit':
		case 'bic':
		case 'bis':
		case 'xor':
		case 'and':
			instrType = 'double';
			break;
	}

	return instrType;
}

function getOpcode(instruction)
{
	var opcode = '';

	instruction = instruction.toLowerCase();

	switch(instruction)
	{
		case 'rrc':
			opcode = '000';
			break;
		case 'swpb':
			opcode = '001';
			break;
		case 'rra':
			opcode = '010';
			break;
		case 'sxt':
			opcode = '011';
			break;
		case 'push':
			opcode = '100';
			break;
		case 'call':
			opcode = '101';
			break;
		case 'reti':
			opcode = '110';
			break;
		case 'jne':
		case 'jnz':
			opcode = '000';
			break;
		case 'jeq':
		case 'jz':
			opcode = '001';
			break;
		case 'jnc':
		case 'jlo':
			opcode = '010';
			break;
		case 'jc':
		case 'jhs':
			opcode = '011';
			break;
		case 'jn':
			opcode = '100';
			break;
		case 'jge':
			opcode = '101';
			break;
		case 'jl':
			opcode = '110';
			break;
		case 'jmp':
			opcode = '111';
			break;
		case 'mov':
			opcode = '0100';
			break;
		case 'add':
			opcode = '0101';
			break;
		case 'addc':
			opcode = '0110';
			break;
		case 'subc':
			opcode = '0111';
			break;
		case 'sub':
			opcode = '1000';
			break;
		case 'cmp':
			opcode = '1001';
			break;
		case 'dadd':
			opcode = '1010';
			break;
		case 'bit':
			opcode = '1011';
			break;
		case 'bic':
			opcode = '1100';
			break;
		case 'bis':
			opcode = '1101';
			break;
		case 'xor':
			opcode = '1110';
			break;
		case 'and':
			opcode = '1111';
			break;
	}

	return opcode;
}

function binaryToHex(binary)
{
	return parseInt(binary, 2).toString(16);
}

function joinInstructionComponents(assembledObj)
{
	var assembledInstr;

	return assembledInstr;
}

function parseInstruction(instruction)
{
	instruction = instruction.toLowerCase();

	instruction = instruction.split(' ');

	instruction[0] = instruction[0].split('.');

	return instruction;
}

function parseSingle(instruction)
{
	var assembledObj = {};

	instruction = parseInstruction(instruction);

	assembledObj.opcode = getOpcode(instruction[0][0]);

	console.log(assembledObj);

	return assembledObj;
}

function parseDouble(instruction)
{
	var assembledObj = {};

	instruction = parseInstruction(instruction);

	assembledObj.opcode = getOpcode(instruction[0][0]);

	console.log(assembledObj);

	return assembledObj;
}

// need to know information about offset to determine this...
function parseJump(instruction)
{
}

function assembleInstruction(instruction)
{
	parsedInstruction = parseInstruction(instruction);

	/*
	if (isEmulatedInstruction(parseInstruction[0][0])
			instruction = getActualInstructionFromEmulated(instruction);
	 */

	switch(getInstructionType(parsedInstruction[0][0]))
	{
		case 'single':
			parseSingle(instruction);
			break;
		case 'double':
			parseDouble(instruction);
			break;
		case 'jump':
			parseJump(instruction);
			break;
		default:
			console.log('invalid instruction!');
	}

}

// tests

assembleInstruction('mov.b r10, r9');
assembleInstruction('swpb r10');
assembleInstruction('nop');
